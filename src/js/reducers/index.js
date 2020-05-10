import { 
	SHOW_CUSTOMERS, 
	SHOW_CUSTOMER_ORDERS, 
	SHOW_CUSTOMER_ORDER_PRODUCTS,
	SHOW_CUSTOMER_PRODUCTS_SUMMARY,
} from '../constants/actions';

const initialState = {
	customers: [],
	orders: [],
	products:[],
	productSummary: []
};

export function rootReducer(state=initialState, action){

	switch(action.type){
		case SHOW_CUSTOMERS:
			return Object.assign({}, state, {
		      customers: action.payload
		    });
		    break;

		case SHOW_CUSTOMER_ORDERS:
			return Object.assign({}, state, {
		      orders: action.payload
		    });
		    break;

	    case SHOW_CUSTOMER_ORDER_PRODUCTS:
			return Object.assign({}, state, {
		      products: action.payload
		    });
		    break;

	    case SHOW_CUSTOMER_PRODUCTS_SUMMARY:
			return Object.assign({}, state, {
		      productSummary: action.payload
		    });
		    break;
		    
	    default:
	    	return state;
	}
};
