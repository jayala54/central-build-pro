import React, { Suspense } from 'react'
import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { pagesConfig } from './pages.config'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MobileCallButton from '@/components/MobileCallButton';

const BlogArticle = React.lazy(() => import('@/pages/BlogArticle'));

const { Pages, Layout, mainPage } = pagesConfig;
const mainPageKey = mainPage ?? Object.keys(Pages)[0];
const MainPage = mainPageKey ? Pages[mainPageKey] : <></>;

const LayoutWrapper = ({ children, currentPageName }) => Layout ?
  <Layout currentPageName={currentPageName}>{children}</Layout>
  : <>{children}</>;

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-10 h-10 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin" />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={
              <LayoutWrapper currentPageName={mainPageKey}>
                <MainPage />
              </LayoutWrapper>
            } />
            {Object.entries(Pages).map(([path, Page]) => (
              <Route
                key={path}
                path={`/${path}`}
                element={
                  <LayoutWrapper currentPageName={path}>
                    <Page />
                  </LayoutWrapper>
                }
              />
            ))}
            <Route path="/Blog/:slug" element={
              <LayoutWrapper currentPageName="Blog">
                <BlogArticle />
              </LayoutWrapper>
            } />
            <Route path="*" element={
              <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
                <div className="max-w-md w-full text-center space-y-6">
                  <h1 className="text-7xl font-light text-slate-300">404</h1>
                  <div className="h-0.5 w-16 bg-slate-200 mx-auto"></div>
                  <h2 className="text-2xl font-medium text-slate-800">Page Not Found</h2>
                  <p className="text-slate-600">The page you're looking for doesn't exist.</p>
                  <button
                    onClick={() => window.location.href = '/'}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    Go Home
                  </button>
                </div>
              </div>
            } />
          </Routes>
        </Suspense>
        <MobileCallButton />
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
