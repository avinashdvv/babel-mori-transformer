module.exports = function(babel){
    var t = babel.types;
    // console.log(t)
    return {
        visitor : {
            ArrayExpression: function(path){
                console.log(path.node)
                path.replaceWith(
                    t.callExpression(
                        t.memberExpression(
                          t.identifier('mori'), 
                          t.identifier('vector')
                        ),
                        path.node.elements
                    )
                  );
            }
        }
    }
}