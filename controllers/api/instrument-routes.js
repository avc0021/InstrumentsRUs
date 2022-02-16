// Instruments.findAll({
//     attributes: [
//       'id',
//       'instrument',
//       'brand_name',
//       'price',
//       'filename',
//     ],
//     //   include: [
//     //     {
//     //       model: User,
//     //       attributes:['id','username','email', 'password']
//     //     }
//     // ]
//   })
//   .then(dbPostData => {
//     const posts = dbPostData.map(post => post.get({ plain: true }));

//     res.render('homepage', {
//       posts,
//       loggedIn: req.session.loggedIn
//     });
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });