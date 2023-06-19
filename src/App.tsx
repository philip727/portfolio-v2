import { Route, Router, Routes } from '@solidjs/router';
import type { Component } from 'solid-js';
import { RootLayout } from './components/layout/RootLayout';
import { Home } from './views/Home';

const App: Component = () => {
    return (
    <Router>
        <Routes>
            <Route path ="/" component={RootLayout}>
                <Route path="" component={Home} />
            </Route>
        </Routes>
    </Router>
  );
};

export default App;
