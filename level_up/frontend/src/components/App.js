import React, { Component } from "react";
import HomePage from "./HomePage";
import {
  BrowserRouter as Router, Routes, Route,
  Link,
  Redirect,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      // <Router>
      //   <Routes>
      //     <Route exact path="/">
      //       <p>This is the home page</p>
      //     </Route>
      //     <Route path="/join" component={RoomJoinPage} />
      //     <Route path="/create" component={CreateRoomPage} />
      //   </Routes>
      // </Router>
      // <Router>
      //   <Routes>
      //     <Route exact path="/" element={<HomePage />} />
      //     <Route path="/about" element={<About />} />
      //   </Routes>
      // </Router>
      // <BrowserRouter>
      //   <Routes>
      //     <Route path="/" element={<Layout />}>
      //       <Route index element={<HomePage />} />
      //       <Route path="blogs" element={<Blogs />} />
      //       <Route path="contact" element={<Contact />} />
      //       <Route path="*" element={<NoPage />} />
      //     </Route>
      //   </Routes>
      // </BrowserRouter>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
const appDiv = document.getElementById("app");
render(<App />, appDiv);