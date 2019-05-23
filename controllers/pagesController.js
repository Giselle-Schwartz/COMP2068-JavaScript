exports.show = (req, res) => {
    const path = (req.path === `/`) ? `/home` : req.path;

    //render view
    res.render(`pages${path}`); //views/pages/about
};