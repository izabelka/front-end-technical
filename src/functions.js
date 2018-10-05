export const sortByKeyAsc = (data, key) => {
      const _sortByKey = (a, b) => {
          return ((a[key] < b[key]) ? -1 : ((a[key] > b[key]) ? 1 : 0));
      }
      return data.sort(_sortByKey);
}

export const sortByKeyDesc = (data, key) => {
      const _sortByKey = (a, b) => {
          return ((a[key] > b[key]) ? -1 : ((a[key] < b[key]) ? 1 : 0));
      }
      return data.sort(_sortByKey);
}
