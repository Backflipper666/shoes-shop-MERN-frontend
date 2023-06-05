// Assuming you have separate reducers for shoes and other parts of your state

type ShoesState = {
  // Define the properties specific to the shoes state
  // For example:
  shoes: [];
  isLoading: Boolean;
};

type RootState = {
  shoes: ShoesState;
  // Add more properties if you have additional parts of your state
};

export default RootState;
