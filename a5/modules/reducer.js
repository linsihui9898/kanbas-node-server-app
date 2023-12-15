const initialState = {
    modules: [],
    module: { name: "New Module 234",
              description: "New Description" },
  };
  const modulesSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {
      setModules: (state, action) => {
        state.modules = action.payload;
      },
      addModule: (state, action) => {
        state.modules = [action.payload, ...state.modules];
      },
  
      deleteModule: (state, action) => {},
      updateModule: (state, action) => {},
      setModule: (state, action) => {},
    },
  });
  export const { addModule, deleteModule,
    updateModule, setModule, setModules } =
    modulesSlice.actions;
  export default modulesSlice.reducer;