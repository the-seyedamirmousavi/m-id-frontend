import Head from "next/head";
import Slider from "../../components/FullScreenSlider";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LinearLayout from "../../components/LinearLayout";
import HtmlPage from "../../components/HtmlPage";

export default function Index() {
    return (
        <>
            <Head>
                <title>MUTec</title>
                <meta name="description" content="home page" />
            </Head>

        < LinearLayout style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            width: '100vw',
            height: '100vh',
            overflowY: 'auto',
            }}>
                <div style={{ height: '100%', overflowY: 'auto'}}>
                <Slider />
            </div>
      </LinearLayout>

        </>
    );
}
