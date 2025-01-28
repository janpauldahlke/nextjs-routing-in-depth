const ArchiveLayout = ({ archive, latest }) => {  // the props names will match the folder names that start with @
  // NOTE: the convention of next for parallel routes is to use @<routeName> in sibling folders
  // we need to wrap parallel routes in the layout like so
  // we could have more then 2 routes, up to n i guess

  // console.log(archive)
  // console.log(latest)
  
  return (
    <div>
      <h1>news archive</h1>
      <div>
        <section id="archive-filter">
          { archive }
        </section>
      </div>

      <div>
        <section id="archive-latest">
          { latest }
        </section>
      </div>
    </div>
  ); 
}

export default ArchiveLayout;