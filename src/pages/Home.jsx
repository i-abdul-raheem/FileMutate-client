import { BuyCoffee, MoreTools, TopBanner, TryMore } from "../components";
import { DefaultLayout } from "../layouts";

export const Home = () => {
  return (
    <DefaultLayout>
      <TopBanner />
      <TryMore />
      <MoreTools />
      <BuyCoffee />
    </DefaultLayout>
  );
};
