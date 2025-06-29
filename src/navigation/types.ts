// Registro de rotas e de parâmetros que serão levados com elas

export type RootStackParamList = {
  Home: undefined;
  Category: { categoryId: number; categoryName: string };
  Search: undefined;
  Login: undefined;
};