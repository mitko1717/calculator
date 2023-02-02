import { firstIcon, secondIcon, thirdIcon, fourthIcon } from "./ICONS";
export const DATA = [
  {
    provider: "backblaze.com",
    price: 7,
    slug: "backblaze",
    icon: firstIcon,
    minPayment: 7,
    priceStorage: 0.005,
    priceTransfer: 0.01,
    isOptions: false,
  },
  {
    provider: "bunny.net",
    price: 0,
    slug: "bunny",
    icon: secondIcon,
    maxPayment: 10,
    isOptions: true,
    options: [
      {
        provider: "HDD",
        priceStorage: 0.01,
        priceTransfer: 0.01,
        checked: true,
      },
      {
        provider: "SSD",
        priceStorage: 0.02,
        priceTransfer: 0.01,
        checked: false,
      },
    ],
  },
  {
    provider: "scaleway.com",
    price: 0,
    slug: "scaleway",
    icon: thirdIcon,
    isOptions: true,
    sales: true,
    options: [
      {
        provider: "Multi",
        priceStorage: 0.06,
        priceTransfer: 0.02,
        freeSize: 75,
        checked: true,
      },
      {
        provider: "Single",
        priceStorage: 0.03,
        priceTransfer: 0.02,
        freeSize: 75,
        checked: false,
      },
    ],
  },
  {
    provider: "vultr.com",
    price: 5,
    slug: "vultr",
    icon: fourthIcon,
    minPayment: 5,
    priceStorage: 0.01,
    priceTransfer: 0.01,
    isOptions: false,
  },
];