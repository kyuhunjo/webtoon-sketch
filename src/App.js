import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// Importing the page components
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Features from './pages/Features/Features';
import ToolInterface from './pages/ToolInterface/ToolInterface';
import LearningCenter from './pages/LearningCenter/LearningCenter';
import Community from './pages/Community/Community';
import ContactSupport from './pages/ContactSupport/ContactSupport';
import PrivacyTerms from './pages/PrivacyTerms/PrivacyTerms';
import './styles/Global.css'; // Assuming you have a Global.css for your global styles
import Navigation from './pages/components/Navigation/Navigation';
import Footer from './pages/components/Footer/Footer';

function App() {
  return (
    <div>
      <Navigation />
        <Switch>
          <Route exact path="/ws/" component={Home} />
          <Route path="/ws/about" component={About} />
          <Route path="/ws/features" component={Features} />
          <Route path="/ws/tool-interface" component={ToolInterface} />
          <Route path="/ws/learning-center" component={LearningCenter} />
          <Route path="/ws/community" component={Community} />
          <Route path="/ws/contact-support" component={ContactSupport} />
          <Route path="/ws/privacy-terms" component={PrivacyTerms} />
          {/* Add additional routes here */}
          {/* If you have a 404 page, it should be the last Route */}
          {/* <Route component={NotFound} /> */}
          <Redirect to="/ws/" />
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
