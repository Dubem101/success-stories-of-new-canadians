// /**
//  * An example of using Material UI
//  */

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import PropTypes from 'prop-types'
// import Layout from '@layouts/Layout'
// import { useStaticQuery, graphql, navigate } from 'gatsby';
// import { Card, CardMedia, Button as MaterialButton, CardActions, Checkbox } from '@material-ui/core';
// import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
// import { withSeo } from './../utils/withSeo';
// import { Page } from './../layouts/Page';
// // Drawer
// import { FormControl, Drawer, List, ListSubheader, ListItem, ListItemText, Collapse } from '@material-ui/core';
// // Drawer
// import { FormControlLabel, FormLabel, Radio, RadioGroup, Container } from '@material-ui/core'
// // Cards
// import { CardActionArea, CardContent, Typography, Fab } from '@material-ui/core'
// // Drawer 
// import { ExpandLess, ExpandMore } from '@material-ui/icons';
// import { BlogPageTemplate } from './selection'

// const useStyles = makeStyles(theme => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 160,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
//   list: {
//     width: 200,
//   },
//   fullList: {
//     width: 'auto',
//   },
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
//   nested: {
//     paddingLeft: theme.spacing(4),
//   },
//   card: {
//     maxWidth: 345,
//   },
// })); 

// export function FilterDrawer() {

//   const nestedClasses = useStyles();

//   const [nameOpen, setNameOpen] = React.useState(true);
//   const [countryOpen, setCountryOpen] = React.useState(false);
//   const [tagOpen, setTagOpen] = React.useState(false);  

//   const [filterNameSetting, setNameSetting] = React.useState('A to Z');
//   const [filterCountrySetting, setCountrySetting] = React.useState(['Include All']);
//   const [filterTagSetting, setTagSetting] = React.useState([]); 
//   const [filterDateSetting, setFilterDateSetting] = React.useState('Newest First');

//   // Possible Options
//   const nameSorting = ['A to Z', 'Z to A']
//   const countries = ['England', 'Scotland', 'Wales', 'Ireland', 'Germany'] 
//   var tags = ['Tag1', 'Tag2', 'Tag3']
//   var checkboxes = []; 

//   const handleClick = (e) => {
//     if (e === 0) setNameOpen(!nameOpen);
//     else if (e === 1) setCountryOpen(!countryOpen);
//     else if (e === 2) setTagOpen(!tagOpen); 
//   };

//   const updateFilter = () => {
//     console.log("refresh the filter.")
//   }

//   const handleNameChange = event => {
//     setNameSetting(event.target.value);
//     updateFilter(); 
//   }

//   const handleCountryChange = event => {
//     console.log(event.target.name + " " + event.target.checked);

//     if (event.target.name === 'Include All')  {
//       setCountryOpen (!event.target.checked); 
//       if (event.target.checked) setCountrySetting(countries); 
//       else setCountrySetting([]); 
//     }
//     // if box is no longer selected
//     else if (!event.target.checked)
//     {
//       var index = filterCountrySetting.indexOf(event.target.name);
//       if (index > -1) filterCountrySetting.splice(index, 1); 
//     }
//     else 
//     { 
//       filterCountrySetting.push(event.target.name);
//     }
//     console.log(filterCountrySetting);
//     updateFilter(); 
//   }

//   const handleTagChange = event => {
//     console.log(event.target.name + " " + event.target.checked);

//     if (event.target.name === 'Include All')  {
//       setTagOpen (!event.target.checked); 
//       if (event.target.checked) setTagSetting(tags); 
//       else setTagSetting([]); 
//     }
//     // if box is no longer selected
//     else if (!event.target.checked)
//     {
//       var index = filterTagSetting.indexOf(event.target.name);
//       if (index > -1) filterTagSetting.splice(index, 1); 
//     }
//     else 
//     { 
//       filterTagSetting.push(event.target.name);
//     }
//     console.log(filterTagSetting);
//     updateFilter(); 
//   }

//   const [drawerState, setDrawerState] = React.useState({
//     left: false,
//   });

//   const toggleDrawer = (side, open) => event => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }

//     setDrawerState({ ...drawerState, [side]: open });
//   };

//   const sideList = side => (
//     <div
//       className={nestedClasses.list}
//     >
//       <List>
//         <List
//         component="nav"
//         aria-labelledby="nested-list-subheader"
//         subheader={
//           <ListSubheader component="div" id="nested-list-subheader">
//             Filter Stories
//           </ListSubheader>
//         }
//         className={nestedClasses.root}
//       >
//         { /* Name Filtering */ }
//         <ListItem button onClick={handleClick.bind(this, 0)}>
//           <ListItemText primary="by Name" />
//           {nameOpen ? <ExpandLess /> : <ExpandMore />}
//         </ListItem>
//         <Collapse in={nameOpen} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>

//           <FormControl component="fieldset" className={nestedClasses.formControl}>
//             <FormLabel component="legend"></FormLabel>
//             <RadioGroup aria-label="name" name="name1" value={filterNameSetting} onChange={handleNameChange}>

//               {nameSorting.map( item => {
//                 return (
//                 <ListItem button className={nestedClasses.nested}>
//                   <FormControlLabel value={item} control={<Radio />} label={item} />
//                 </ListItem>
//                 )
//               })}
//               </RadioGroup>
//           </FormControl>


//           </List>
//         </Collapse> 

//         { /* Country Filtering */ }

//         <ListItem>
//           <ListItemText primary="by Country" />        
//         </ListItem>
//         <Collapse in={true} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//           <ListItem button className={nestedClasses.nested}>
//             <Checkbox name='Include All' label='Include All' onClick={handleCountryChange} defaultChecked={!countryOpen}></Checkbox>Include All 
//               </ListItem>
//           </List>
//         </Collapse>
//         <Collapse in={countryOpen} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>

//           {countries.map( item => {return (
//             <ListItem button className={nestedClasses.nested}>
//               <Checkbox name={item} label={item} onClick={handleCountryChange}></Checkbox>{item}
//             </ListItem>) } ) } 

//           </List>
//         </Collapse>       

//         { /* Tag Filtering */ }

//         <ListItem>
//           <ListItemText primary="by Tag" />
//         </ListItem>
//         <Collapse in={true} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//           <ListItem button className={nestedClasses.nested}>
//             <Checkbox name='Include All' label='Include All' onClick={handleTagChange} defaultChecked={!tagOpen}></Checkbox>Include All 
//           </ListItem>
//           </List>
//         </Collapse>
//         <Collapse in={tagOpen} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding> 

//           { tags.map(
//             item => 
//             <ListItem button className={nestedClasses.nested}>
//             <Checkbox name={item} label={item} onClick={handleTagChange} ></Checkbox>{item}
//             </ListItem>
//             )
//           }
//           </List>
//         </Collapse> 
//       </List>
//       </List>
//     </div>
//   );

//   return (
//     <div>
//       <Button onClick={toggleDrawer('left', true)}>Filter Options</Button>
//       {/* <Drawer open={drawerState.left} onClose={toggleDrawer('left', false)}>
//         {sideList('left')}
//       </Drawer> */}

//       {/* <FilterResults
//         countryFilter={filterCountrySetting}
//         tagFilter={filterTagSetting}
//         includeAllCountries={!countryOpen}
//         includeAllTags={!tagOpen}
//         >
//       </FilterResults> */}
//     </div>
//   );
// }

// // const SelectionPage = ( {data} ) => {
    
// //     return (

// //     <Page className='selection'>
// //       <h1 className='selection__title'>View all our stories!</h1>
// //       <p className='index__text'>Filter through a list of stories by filtering below</p>
// //       <div className='containers'>

// //       { /* Filter Row */ }
// //       <Grid
// //           container
// //           direction="row"
// //           justify="center"
// //           alignItems="center"
// //         >
// //         <FilterDrawer className='temporary'> 
// //         </FilterDrawer>
// //       </Grid>

// //       </div>
// //     </Page>
// //     )
// //     }

// // // Displays results from filtering 
// // export default function FilterResults(props)
// // {
// //   const tagStyles = makeStyles(theme => ({
// //     margin: {
// //       margin: theme.spacing(5),
// //     },
// //     extendedIcon: {
// //       marginRight: theme.spacing(1),
// //     },
// //   }));

// //   const rootSettings = useStyles()

// //   const BlogPage = ({ data }) => {
// //     const { frontmatter } = data.markdownRemark
  
// //     return (
// //       <div>
// //         { frontmatter.map( item => 
// //           (
// //               <SelectionCard
// //               title={item.title}
// //                       desc={item.description}
// //                       tags={['Tag1']}>
// //               </SelectionCard>
// //           )) }
// //           {
// //             frontmatter.map( item => console.log(item.title))
// //           }
// //       </div>
// //     )
// //   }

// //   return (
// //     <BlogPage>
      
// //     </BlogPage>
// //     // <div style={{display: 'flex', flexWrap:'wrap', alignContent:'space-between', maxWidth: '1500px'}} className={rootSettings.root}>
// //     //     {allMarkdownRemark.edges.map(({ node }, i) => (
// //     //       <SelectionCard
// //     //         title={node.frontmatter.title}
// //     //         desc={node.frontmatter.description}
// //     //         tags={['Tag1']}>
// //     //           {console.log(node.frontmatter.title + ' ' + node.frontmatter.country + ' ' + node.frontmatter.tags)}
// //     //       </SelectionCard> 
// //     //     ))}
// //     //   {

// //     //   }
// //     // </div>
// //   )
// // }

// // function SelectionCard(props) {

// //   const classes = useStyles();

// //   return (
// //     <Card className={classes.card}>
// //       <CardActionArea>
// //         <CardMedia
// //           component="img"
// //           alt="Sample Story"
// //           height="225"
// //           image="/static/demo-f362adb686ed8fa86a8c5e96437a264c.jpeg"
// //           title="Sample Story"
// //         />
// //         <CardContent>
// //           <Typography gutterBottom variant="h5" component="h2">
// //             {props.title}
// //           </Typography>
// //           <Typography variant="caption" component="p">
// //             {props.desc}
// //           </Typography>
// //           <Typography variant="body2" color="textSecondary" component="p">
// //             Here is space for a little description to hook reader.
// //           </Typography>
          
// //           {
// //             props.tags.map( tagText => 
// //               <Fab
// //                 variant="extended"
// //                 size="small"
// //                 color="primary"
// //                 aria-label="add"
// //               >
// //                 {tagText}
// //               </Fab>
// //             )  

// //           }
// //         </CardContent>
// //       </CardActionArea>
// //       <CardActions>
// //         <Button size="small" color="primary">
// //           Share
// //         </Button>
// //         <Button size="small" color="primary">
// //           Learn More
// //         </Button>
// //       </CardActions>
// //     </Card>
// //   );
// // }

// export default withSeo(SelectionPage, {
//   title: 'Home',
// });
