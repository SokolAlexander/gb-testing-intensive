const msInDay = 1000 * 60 * 60 * 24;

// export const formatDate = (date) => {
//   const days = Math.floor((Date.now() - date) / msInDay);

//   if (days < 1) {
//     return 'Today'
//   }

//   return `${Math.floor(days)} days ago`;
// }

export const formatDate = date => {
  if (!date) {
    throw new Error('no Date!');
  }
  
  return date.toDateString();
}