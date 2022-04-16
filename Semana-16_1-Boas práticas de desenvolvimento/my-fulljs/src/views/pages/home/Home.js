import homeSectionsOne from '../../components/sections/homeSectionsOne'
import homeSectionsTwo from '../../components/sections/homeSectionTwo';
import floatImagem from '../../components/float/floatImage'
let Home = {
  is_private: false,

  render: async () => {
      let view = `
          <div>
           
            ${homeSectionsOne}
            ${floatImagem}
            ${homeSectionsTwo}
          </div>
      `;

      return view
  },

  after_render: async () => {}
}

export default Home;