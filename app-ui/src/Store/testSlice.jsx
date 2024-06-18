import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



// Initial state
const initialState = {
    data: [],
    status: 'idle',
    selectedTest: {},
    selectedPage: 1
}

// Slice creation
const testSlice = createSlice({
    name: 'tests',
    initialState,
    reducers: {
        setSelectedTest(state, action) {
            state.selectedTest = action.payload;
        },
        setSelectedPage(state, action) {
            state.selectedPage = action.payload;
        }
      },
    extraReducers: (builder) => {
        builder
            .addCase(getTests.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(getTests.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = 'succeeded'; 
            })
            .addCase(getTests.rejected, (state, action) => {
                state.status = 'failed'; 
            });
    }
});

// Export slice actions and reducer
export const { fetchTests, setSelectedTest, setSelectedPage } = testSlice.actions;
export default testSlice.reducer;

// Async thunk definition
export const getTests = createAsyncThunk('data/get', async () => {
    const data = await fetch('http://localhost:3002/api/data/');
    const result = await data.json();
    return result;
});