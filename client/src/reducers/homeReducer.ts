import { FETCH_HOME } from '../TYPES';

export default function(state: any = null, action: any) {
	switch (action.type) {
		case FETCH_HOME: {
			return action.payload || [];
		}
		default: {
			return state;
		}
	}
}
