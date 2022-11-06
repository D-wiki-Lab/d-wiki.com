import { defineStore } from 'pinia';

import Project from '~/models/project';
import ProjectContent from "~/models/project-content";
import ProjectLink from "~/models/project-link";
import History from "~/models/history";
import Image from "~/models/image";
import Toc from '~/models/toc';
import { Project as ProjectType } from '~/types/project';
import {ImageFitType, ImageLoadingType} from "~/types/image";
import { Toc as TocType } from '~/types/toc';

type ProjectStore = {
  project: ProjectType;
  projects: ProjectType[];
};

export const useProjectStore = defineStore('project', {
  state: (): ProjectStore => ({
    project: {
      id: '',
      name: '',
      meta: {
        startedAt: 0,
      },
      body: {
        contents: [],
        links: [],
      },
      history: [],
    },
    projects: [],
  }),
  getters: {
    projectToc(): TocType[] {
      const toc: TocType[] = [];

      this.project.body.contents.forEach((content) => {
        toc.push(new Toc(content.id, content.title));
      });

      if (this.project.body.links.length) {
        toc.push(new Toc('links', 'Links'));
      }

      return toc;
    },
  },
  actions: {
    init() {
      this.initProject();
      this.initProjects();
    },
    initProject() {
      this.project = {
        id: '',
        name: '',
        meta: {
          startedAt: 0,
        },
        body: {
          contents: [],
          links: [],
        },
        history: [],
      };
    },
    initProjects() {
      this.projects = [];
    },
    async setProject(id: string): Promise<ProjectType | undefined> {
      if (id === this.project.id) {
        return this.project;
      }

      const project = new Project(
        'd-wiki',
        'D-wiki',
        undefined,
        1,
        [
          new ProjectContent(
            'content-0',
            'About',
            'About の本文',
            0,
          ),
          new ProjectContent(
            'content-1',
            'Mint Info',
            'Mint Info の本文',
            1,
          ),
          new ProjectContent(
            'content-2',
            'Team',
            'Team の本文',
            2,
          ),
          new ProjectContent(
            'content-3',
            'Roadmap',
            'Roadmap の本文',
            3,
          ),
          new ProjectContent(
            'content-4',
            'Utility',
            'Utility の本文',
            4,
          ),
          new ProjectContent(
            'content-5',
            'Other',
            'Other の本文',
            5,
          ),
        ],
        [
          new ProjectLink(
            'Site',
            'https://d-wiki.com/',
            0,
          ),
          new ProjectLink(
            'Twitter',
            'https://twitter.com/',
            1,
          ),
          new ProjectLink(
            '',
            '',
            2,
          ),
          new ProjectLink(
            '',
            '',
            2,
          ),
        ],
        [
          new History(
            'history-0',
            'official',
            {
              id: 'official',
              name: 'Official',
              profileImage: new Image(
                '/user/official/profile-image.jpg',
                'official\'s Profile Image',
                160,
                160,
                undefined,
                ImageFitType.cover,
                ImageLoadingType.lazy,
              ),
            },
            'd-wiki',
            [
              new ProjectContent(
                'content-0',
                'About',
                'About の本文',
                0,
              ),
              new ProjectContent(
                'content-3',
                'Roadmap',
                'Roadmap の本文',
                3,
              ),
            ],
            [
              new ProjectLink(
                'Site',
                'https://d-wiki.com/',
                0,
              ),
              new ProjectLink(
                'Twitter',
                'https://twitter.com/',
                1,
              ),
            ],
            1,
          ),
          new History(
            'history-1',
            'official-sub',
            {
              id: 'official-sub',
              name: 'Official Sub',
              profileImage: new Image(
                '/user/official-sub/profile-image.jpg',
                'official-sub\'s Profile Image',
                160,
                160,
                undefined,
                ImageFitType.cover,
                ImageLoadingType.lazy,
              ),
            },
            'd-wiki',
            [
              new ProjectContent(
                'content-0',
                'About',
                'About の本文',
                0,
              ),
              new ProjectContent(
                'content-3',
                'Roadmap',
                'Roadmap の本文',
                3,
              ),
            ],
            [
              new ProjectLink(
                'Site',
                'https://d-wiki.com/',
                0,
              ),
              new ProjectLink(
                'Twitter',
                'https://twitter.com/',
                1,
              ),
            ],
            1,
          ),
        ],
      );
      this.project = project;
      return project;
    },
    async updateProject(project: ProjectType): Promise<ProjectType | undefined> {
      this.project = {
        ...project,
        history: this.project.history,
      };
      return this.project;
    },
  },
});
