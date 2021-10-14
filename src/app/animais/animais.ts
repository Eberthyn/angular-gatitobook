/*Inteface para retorno da API ng g interface animais/animais*/
export interface Animal {
  id: number;
  postDate: Date;
  url: string;
  description: string;
  allowComments: boolean;
  likes: number;
  comments: number;
  userId: number;
}

export type Animais = Array<Animal>;
