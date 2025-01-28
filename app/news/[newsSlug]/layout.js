const NewsDetailLayout = (props) => { 


  //console.log("modal:", props);
  
  return (
    <>
      {props.popup ?? <p>No modal content detected</p>}
      {props.children}
    </>
  );
}

export default NewsDetailLayout;