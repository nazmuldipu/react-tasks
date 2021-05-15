import '../../initData';
import taskReducer from './tasksSlice';

describe('task reducer', () => {
    const initialState = taskReducer(undefined, { type: 'unknown' });

    it('should handle initial state', () => {
        expect(initialState.some(task => task.type === 'Warmup')).toBeTruthy();
    });

})