
export const progressByPath = (path = '/') => {

  const progress = {
    '/': 1,
    '/summary': 50,
    '/checkout': 100
  }
  return progress[path];
}