import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <div>
          <div>
        <p className="lh-base font-monospace">
          The NewsDuniya app is another aggregator app that does an excellent job
          of presenting news from a variety of sources on an incredibly wide
          range of topics. Well suited to users with niche interests, the app
          has many topics to choose from! While that might be exhausting
          for some people, NewsDuniya has gained a loyal following among news
          junkies.
        </p>
        </div>
        <ul>
            <li className="lh-base font-monospace">Truly beautiful, highly-usable design</li>
            <li className="lh-base font-monospace">The app is quick and responsive</li>
            <li className="lh-base font-monospace">Regular, efficient updates so users can stay informed on the latest events</li>
            <li className="lh-base font-monospace">A clean user interface that readers of all ages can wrap their heads around</li>
            <li className="lh-base font-monospace">Digg offers helpful summaries of news stories, helping busy professionals stay informed</li>
        </ul>
      </div>
    );
  }
}

export default About;
