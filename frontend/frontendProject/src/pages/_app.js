import ErrorMessageProvider from '../contexts/ErrorMessageContext';
import TrProvider from '../contexts/TrContext';
import TrListProvider from '../contexts/TrListContext';

function MyApp({ Component, pageProps }) {
  return <ErrorMessageProvider>
            <TrProvider>
              <TrListProvider>
                <Component {...pageProps} />
              </TrListProvider>
            </TrProvider>
        </ErrorMessageProvider>
}

export default MyApp
