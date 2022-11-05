const renderImage = (imgFile?: File): FileReader | undefined => {
  if (!imgFile) return undefined;

  const reader = new FileReader()
  reader.readAsDataURL(imgFile)
  return reader;
}

export default renderImage;
