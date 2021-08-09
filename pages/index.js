import Head from "next/head";
import Image from "next/image";

import NavBar from "../components/ui/nav-bar.ui";
import Typography from "../components/styles/typography.styles";
import Container from "../components/styles/container.styles";
import CustomButton from "../components/styles/custom-button.styles";
import Footer from "../components/ui/footer.ui";

const Home = () => {
  return (
    <>
      <Head>
        <title>Chat App | App for Team Collaboration</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar />
        <section className="bg-primary-light px-4 min-h-screen flex items-center justify-between md:pb-28 md:pt-40">
          <Container className="flex justify-between items-center md:flex-col space-y-20">
            <div className="max-w-md">
              <Typography variant="headline">Have you best call</Typography>
              <Typography variant="subtitle" className="mt-2 text-">
                Fast, easy & unlimited team chat.
              </Typography>
              <div className="flex space-x-8 mt-12 sm:flex-col sm:space-y-5 sm:space-x-0">
                <CustomButton variant="filled">Try for free</CustomButton>
                <CustomButton variant="outlined" color="white">
                  Get a demo
                </CustomButton>
              </div>
            </div>
            <div>
              <Image src="/Hero Image.png" width={500} height={500} />
            </div>
          </Container>
        </section>
        <section className="flex flex-col items-center py-28 px-4">
          <Typography variant="title" className="lg:text-center lg:text-4xl">
            Connect with your team instantly
          </Typography>
          <Typography
            variant="paragraph"
            className="text-center max-w-xl mt-14 mb-28 sm:mb-20"
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa
          </Typography>
          <Container>
            <Image
              src="/chat.png"
              width={1160}
              height={890}
              className="object-contain ml-4"
            />
          </Container>
        </section>
        <section className="bg-secondary-transparent py-48 flex items-center lg:flex-col-reverse lg:py-28">
          <div className="-ml-12 w-4/5 lg:self-start lg:mt-28 lg:w-full sm:mt-40">
            <Image src="/startup.png" width={700} height={700} />
          </div>
          <div className="w-full px-4 flex justify-center lg:ml-24 lg:w-auto md:ml-0">
            <div className="max-w-xl flex flex-col">
              <Typography variant="title" className="sm:text-4xl">
                Perfect solutions for small bussinessess
              </Typography>
              <Typography variant="paragraph" className="mb-9 mt-5">
                Pricing planes that fit like a glove.
              </Typography>
              <div className="flex items-start space-x-8 md:flex-col md:items-start md:space-x-0 md:space-y-3 md:max-w-sm">
                <div className="mt-1">
                  <Image src="/stars.svg" width={190} height={33} />
                </div>
                <Typography variant="paragraph">
                  <strong>5,200 bussinesses</strong> use ChatApp and they rate
                  it as <strong>5-stars</strong>
                </Typography>
              </div>
              <div className="w-2/5 border border-secondary mt-8 rounded-full" />
              <div className="flex space-x-8 mt-12 h-11 sm:flex-col sm:space-x-0 sm:space-y-5">
                <CustomButton variant="filled">Try for free</CustomButton>
                <CustomButton variant="outlined" color="secondary">
                  Get a demo
                </CustomButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
