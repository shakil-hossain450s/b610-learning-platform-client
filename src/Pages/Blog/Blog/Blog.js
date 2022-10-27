import React from "react";

const Blog = () => {
  return (
    <section className="lg:grid grid-cols-2 gap-8 mt-8 mx-8 mb-[271px]">
      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box shadow-lg my-3">
        <div className="collapse-title text-xl font-medium">
          What is Cors?
        </div>
        <div className="collapse-content">
          <div className="divider my-1"></div>
          <p>
            Cors is a web application that allows you to control the CORS.
            Cross-Origin Resource Sharing is an HTTP-header based mechanism that allows a server to indicate any origins such as: domain, scheme, or port and other than its own from which a browser should permit loading resources.
          </p>
        </div>
      </div>
      <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box shadow-lg my-3">
        <div className="collapse-title text-xl font-medium">
          Why are you using firebase? What other options do you have to implement authentication?
        </div>
        <div className="collapse-content">
          <div className="divider my-1"></div>
          <p>
            Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app.
            Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
          </p>
        </div>
      </div>
      <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box shadow-lg my-3">
        <div className="collapse-title text-xl font-medium">
          How does the private route work?
        </div>
        <div className="collapse-content">
          <div className="divider my-1"></div>
          <p>
            The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
          </p>
        </div>
      </div>
      <div tabIndex={3} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box shadow-lg my-3">
        <div className="collapse-title text-xl font-medium">
          What is Node? How does Node work?
        </div>
        <div className="collapse-content">
          <div className="divider my-1"></div>
          <p>
            Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
