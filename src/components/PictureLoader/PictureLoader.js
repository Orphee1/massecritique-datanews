import React from "react";
import ContentLoader from "react-content-loader";

export default function PictureLoader({ backgroundColor, foregroundColor }) {
      return (
            <ContentLoader
                  speed={2}
                  width={1070}
                  height={600}
                  viewBox="0 0 1070 600"
                  backgroundColor={backgroundColor}
                  foregroundColor={foregroundColor}
            >
                  <rect x="20" y="20" rx="2" ry="2" width="1070" height="700" />
            </ContentLoader>
      );
}
