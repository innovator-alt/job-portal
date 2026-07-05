import MainLayout from "../layouts/MainLayout";

import Hero from "../components/home/Hero";
import SearchBar from "../components/home/SearchBar";
import FeaturedCompanies from "../components/home/FeaturedCompanies";
import Categories from "../components/home/Categories";
import FeaturedJobs from "../components/home/FeaturedJobs";
import Stats from "../components/home/Stats";
import Testimonials from "../components/home/Testimonials";
import Newsletter from "../components/home/Newsletter";

function Home() {
  return (
    <MainLayout>
      <Hero />

      <SearchBar />

      <FeaturedCompanies />

      <Categories />

      <FeaturedJobs />

      <Stats />

      <Testimonials />

      <Newsletter />
    </MainLayout>
  );
}

export default Home;