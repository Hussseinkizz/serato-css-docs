import Layout from '../components/Layout';
import 'serato-css/serato.css';
import { StoreProvider } from '../store/store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  );
}

export default MyApp;
