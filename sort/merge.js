function _mergeSort( items, l, r ){
	if( l >= r )
		return
	let mid = parseInt( ( l+r )/2 )
	_mergeSort( items, l, mid )
	_mergeSort( items, mid+1, r )
	_merge( items, l, r, mid )
}

function _merge( items, l, r, mid ){
	console.log('_merge ' + l + ' ' + r + ' '+mid)
	let trans = []
	for(var k = l; k <= r; k++){
		trans[k-l] = items[k]
	}
	console.log( trans )
	var i = l, j = mid+1
	for(var k=l; k<=r; k++){
		setTimeout(1000);
		if( i > mid ){
			//items[k] = trans[j-l]
			items.splice(k, 1);
			items.splice(k, 0, trans[j-l]);
			j++
		}else if( j > r ){
			//items[k] = trans[i-l]
			items.splice(k, 1);
			items.splice(k, 0, trans[i-l]);
			i++
		}else if( trans[i-l] < trans[j-l] ){
			//items[k] = trans[i-l]
			items.splice(k, 1);
			items.splice(k, 0, trans[i-l]);
			i++
		}else{
			//items[k] = trans[j-l]
			items.splice(k, 1);
			items.splice(k, 0, trans[j-l]);
			j++
		}

	}
	console.log( items )
}

module.exports = ( items ) => {
	console.log(items)
	_mergeSort( items, 0, items.length-1 )
	console.log(items)
	return items
}