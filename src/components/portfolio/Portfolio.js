import React from "react";
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid, Link } from "@mui/material";
import { info } from "../../info/Info";

export default function Portfolio() {
  return (
    <Box>
      <Grid
        container
        spacing={6}
        margin={3}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {info.portfolio.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <PortfolioBlock
              image={project.image}
              live={project.live}
              source={project.source}
              title={project.title}
            />
          </Grid>
        ))}
      </Grid>
      <h2>
        For more projects, visit my{" "}
        <Link
          href="https://github.com/Aishwarya9425"
          color="inherit"
          underline="always"
          target="_blank"
        >
          Github
        </Link>
      </h2>
    </Box>
  );
}
