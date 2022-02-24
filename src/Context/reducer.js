export const initialValue = {
  product: [],
};

export const cartReducer = (state, action) => {
  const { type, payload } = action;
  const { product } = state;
  switch (type) {
    case 'ADD_ITEM':
      return {
        ...state,
        product: [...product, { ...payload, qty: 1 }],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        product: product.filter((c) => c.id !== payload.id),
      };
    case 'INCREASE_PRODUCT_QTY':
      return {
        ...state,
        product: product.filter((c) =>
          c.id === action.payload.id ? (c.qty += 1) : c.qty
        ),
      };
    case 'DECREASE_PRODUCT_QTY':
      return {
        ...state,
        product: product.filter((c) =>
          c.id === action.payload.id ? (c.qty -= 1) : c.qty
        ),
      };

    // case 'TOTAL_PRICE':
    //   return {
    //     ...state,
    //     total: state.product.reduce((accumulator, currentProd) => {
    //       return accumulator + currentProd.price;
    //     }, 0),
    //   };
    default:
      return state;
    // case 'ADD_ITEM': {
    //   console.log('ADD_ITEM', payload);
    //   return {
    //     ...state,
    //     product: payload.product,
    //   };
    // }
    // case 'REMOVE_ITEM': {
    //   console.log('REMOVE_ITEM', payload);
    //   return {
    //     ...state,
    //     product: payload.product,
    //   };
    // }
    // case 'TOTAL_ITEMS': {
    //   console.log('TOTAL_ITEMS', payload);
    //   return {
    //     ...state,
    //     total: payload.total,
    //   };
    // }

    // default: {
    //   return state;
    // }
  }
};
