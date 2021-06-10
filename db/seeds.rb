# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Shoe.destroy_all

Shoe.create!(
    brand: 'Fila',
    name: 'Vulc 13',
    style: 'high-top',
    pcolor: 'white',
    url: 'https://www.amazon.com/gp/product/B071HFLWQQ?pf_rd_r=QMTVPBZP258SHPX4WW82&pf_rd_p=5ae2c7f8-e0c6-4f35-9071-dc3240e894a8&pd_rd_r=e8a80a86-b90a-4c9b-8391-a7371584e4fe&pd_rd_w=iaUYJ&pd_rd_wg=QxOQV&ref_=pd_gw_unk'
)

Shoe.create!(
    brand: 'Fila',
    name: 'Vulc 13',
    style: 'high-top',
    pcolor: 'black',
    url: 'https://www.amazon.com/gp/product/B07FCRFTKV?pf_rd_r=QMTVPBZP258SHPX4WW82&pf_rd_p=5ae2c7f8-e0c6-4f35-9071-dc3240e894a8&pd_rd_r=e8a80a86-b90a-4c9b-8391-a7371584e4fe&pd_rd_w=iaUYJ&pd_rd_wg=QxOQV&ref_=pd_gw_unk&th=1'
)

Shoe.create!(
    brand: 'Fila',
    name: 'Vulc 13',
    style: 'high-top',
    pcolor: 'red',
    url: 'https://www.amazon.com/gp/product/B073KCPS22?pf_rd_r=QMTVPBZP258SHPX4WW82&pf_rd_p=5ae2c7f8-e0c6-4f35-9071-dc3240e894a8&pd_rd_r=e8a80a86-b90a-4c9b-8391-a7371584e4fe&pd_rd_w=iaUYJ&pd_rd_wg=QxOQV&ref_=pd_gw_unk&th=1'
)

Shoe.create!(
    brand: 'Converse',
    name: 'Chuck Taylor',
    style: 'low-top',
    pcolor: 'white',
    url: 'https://www.amazon.com/dp/B000M3D6VU/ref=twister_B07K57L77J'
)

Shoe.create!(
    brand: 'Converse',
    name: 'Chuck Taylor',
    style: 'low-top',
    pcolor: 'black',
    url: 'https://www.amazon.com/dp/B000086M4M/ref=twister_B07K57L77J?th=1'
)
Shoe.create!(
    brand: 'Converse',
    name: 'Chuck Taylor',
    style: 'low-top',
    pcolor: 'red',
    url: 'https://www.amazon.com/dp/B0009NGTTO/ref=twister_B07K57L77J'
)