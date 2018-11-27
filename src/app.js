

export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
    initialState: {
      products:[
        {name: 'aaa',id:1},
        {name: 'bbb',id:2},
      ]
    }
  },
};

