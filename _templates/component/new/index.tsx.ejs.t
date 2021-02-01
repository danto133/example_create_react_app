---
to: src/components/<%= level %>/<%= name %>/index.tsx
---
import React from "react";

interface <%= name %>Props {
}

const <%= name %>: React.FC<<%= name %>Props> = () => (
  <div><%= name %></div>
);

export default <%= name %>;
