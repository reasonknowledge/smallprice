export interface ProduitProps {
  id: number;
  nom: string;
  selected: boolean;
  prix: string;
  prixParDefaut: string;
  isOpen: boolean;
}

export const produits: ProduitProps[] = [
  {
    id: 1,
    nom: "Oignon",
    selected: false,
    prix: "",
    prixParDefaut: "5",
    isOpen: false,
  },
  {
    id: 2,
    nom: "Tomate",
    selected: false,
    prix: "",
    prixParDefaut: "6",
    isOpen: false,
  },
  {
    id: 3,
    nom: "Pomme de terre",
    selected: false,
    prix: "",
    prixParDefaut: "4",
    isOpen: false,
  },
  {
    id: 4,
    nom: "Carotte",
    selected: false,
    prix: "",
    prixParDefaut: "3",
    isOpen: false,
  },
  {
    id: 5,
    nom: "Poivron",
    selected: false,
    prix: "",
    prixParDefaut: "8",
    isOpen: false,
  },
  {
    id: 6,
    nom: "Ail",
    selected: false,
    prix: "",
    prixParDefaut: "10",
    isOpen: false,
  },
  {
    id: 7,
    nom: "Courgette",
    selected: false,
    prix: "",
    prixParDefaut: "7",
    isOpen: false,
  },
  {
    id: 8,
    nom: "Aubergine",
    selected: false,
    prix: "",
    prixParDefaut: "9",
    isOpen: false,
  },
];
