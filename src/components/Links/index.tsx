import React from "react";

interface LinksState {
  name: string; //replace any with suitable type
}

interface LinksProps {
  links: any[];
}

class Links extends React.Component<LinksProps, LinksState> {
  constructor(props: LinksProps) {
    super(props);
    this.state = { name: "" };
  }

  render() {
    return (
      <div>
        <span>Links</span>
        <ul>
          {this.props.links.map(function (link: string, index: number) {
            return (
              <li key={index}>
                {link}{" "}
                <a target="_blank" rel="noreferrer" href={link}>
                  Visit
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Links;
