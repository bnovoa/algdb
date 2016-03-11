module.exports = {
	'localhost': {
		baseURL: 'http://localhost:8000',
		// baseURL: 'http://198.211.105.25:8000',
		admin: true
	},
	'algdb.surge.sh': {
		baseURL: 'http://198.211.105.25:8000',
		admin: false
	}
}[window.location.hostname]

/*{"_id":"56d1e75c939532b70e10e188","id":"pll","name":"Permutation of the Last Layer","image":"pll","abbrev":"PLL","description":"PLL is the acronym for **Permutation of the Last Layer**. PLL is the last step of many speedsolving methods. In this step, the pieces on the top layer have already been oriented [OLL](/set/oll) so that the top face has all the same color, and they can now be moved into their solved positions. There are 21 PLLs (13 if you count mirrors and inverses as being the same) and each one is named after a letter. The same algorithm may not be the fastest for everyone, and shorter algorithms are not always faster than longer ones. PLL is a subgroup of [ZBLL](/set/zbll).","cube":{"centers":[0,1,2,3,4,5],"edges":{"orient":[0,0,0,0,0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7,8,9,10,11]},"corners":{"orient":[0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7]}},"subsets":[],"cases":[{"name":"Aa","algs":[{"auf":"","alg":"l' U R' D2 R U' R' D2 R","type":"*","_id":"56d9130ac3e8508f5444ddc9"},{"alg":"x R' U R' D2 R U' R' D2 R2","type":"*","_id":"56d9130ac3e8508f5444ddc8"},{"alg":"R' F R' B2 R F' R' B2 R2","type":"*","_id":"56d9130ac3e8508f5444ddc7"},{"alg":"x' R2 D2' R' U' R D2' R' U R'","auf":"U","type":"*","_id":"56d9130ac3e8508f5444ddc6"},{"alg":"R U R' F' r U R' U' r' F R2 U' R'","auf":"U'","type":"*","_id":"56d9130ac3e8508f5444ddc5"}],"cube":{"centers":[0,1,2,3,4,5],"edges":{"orient":[0,0,0,0,0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7,8,9,10,11]},"corners":{"orient":[0,0,0,0,0,0,0,0],"perm":[1,2,0,3,4,5,6,7]}}},{"name":"Ab","algs":[{"alg":"l' R' D2 R U R' D2 R U' R x'","type":"*","_id":"56d9130ac3e8508f5444ddc3"},{"alg":"x R2' D2 R U R' D2 R U' R x'","type":"*","_id":"56d9130ac3e8508f5444ddc2"},{"alg":"l U' R D2 R' U R D2 R2","auf":"U","type":"*","_id":"56d9130ac3e8508f5444ddc1"},{"alg":"x' R U' R D2 R' U R D2 R2","auf":"U","type":"*","_id":"56d9130ac3e8508f5444ddc0"}],"cube":{"centers":[0,1,2,3,4,5],"edges":{"orient":[0,0,0,0,0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7,8,9,10,11]},"corners":{"orient":[0,0,0,0,0,0,0,0],"perm":[2,0,1,3,4,5,6,7]}}},{"name":"E","algs":[{"alg":"x' R U' R' D R U R' D' R U R' D R U' R' D' x","auf":"U","type":"*","_id":"56d9130ac3e8508f5444ddbe"},{"alg":"R2 U R' U' y R U R' U' R U R' U' R U R' y' R U' R2","type":"*","_id":"56d9130ac3e8508f5444ddbd"},{"alg":"z U2' R2' F R U R' U' R U R' U' R U R' U' F' R2 U2'","type":"TH","_id":"56d9130ac3e8508f5444ddbc"},{"alg":"y x' R U' R' D R U R' u2 R' U R D R' U' R x","type":"*","_id":"56d9130ac3e8508f5444ddbb"}],"cube":{"centers":[0,1,2,3,4,5],"edges":{"orient":[0,0,0,0,0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7,8,9,10,11]},"corners":{"orient":[0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7]}}},{"name":"F","algs":[{"alg":"R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R","auf":"U","type":"TH","_id":"56d9130ac3e8508f5444ddb9"},{"alg":"R' U2 R' d' R' F' R2 U' R' U R' F R U' F","auf":"U2","type":"TH","_id":"56d9130ac3e8508f5444ddb8"},{"alg":"R' U R U' R2 F' U' F U R F R' F' R2","type":"TH","_id":"56d9130ac3e8508f5444ddb7"},{"alg":"M' U2 L F' R U2 r' U r' R2 U2 R","type":"TH","_id":"56d9130ac3e8508f5444ddb6"}],"cube":{"centers":[0,1,2,3,4,5],"edges":{"orient":[0,0,0,0,0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7,8,9,10,11]},"corners":{"orient":[0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7]}}},{"name":"Ga","algs":[{"alg":"R2 u R' U R' U' R u' R2 y' R' U R","type":"*","_id":"56d9130ac3e8508f5444ddb4"},{"alg":"R2 U R' U R' U' R U' R2 D U' R' U R D'","type":"*","_id":"56d9130ac3e8508f5444ddb3"},{"alg":"R2 u R' U R' U' R u' R2 F' U F","type":"*","_id":"56d9130ac3e8508f5444ddb2"},{"alg":"D' R2 U R' U R' U' R U' R2 U' D R' U R","type":"*","_id":"56d9130ac3e8508f5444ddb1"}],"cube":{"centers":[0,1,2,3,4,5],"edges":{"orient":[0,0,0,0,0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7,8,9,10,11]},"corners":{"orient":[0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7]}}},{"name":"Gb","algs":[],"cube":{"centers":[0,1,2,3,4,5],"edges":{"orient":[0,0,0,0,0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7,8,9,10,11]},"corners":{"orient":[0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7]}}},{"name":"Gc","algs":[],"cube":{"centers":[0,1,2,3,4,5],"edges":{"orient":[0,0,0,0,0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7,8,9,10,11]},"corners":{"orient":[0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7]}}},{"name":"Gd","algs":[],"cube":{"centers":[0,1,2,3,4,5],"edges":{"orient":[0,0,0,0,0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7,8,9,10,11]},"corners":{"orient":[0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7]}}},{"name":"H","algs":[],"cube":{"centers":[0,1,2,3,4,5],"edges":{"orient":[0,0,0,0,0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7,8,9,10,11]},"corners":{"orient":[0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7]}}},{"name":"Ja","algs":[],"cube":{"centers":[0,1,2,3,4,5],"edges":{"orient":[0,0,0,0,0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7,8,9,10,11]},"corners":{"orient":[0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7]}}},{"name":"Jb","algs":[],"cube":{"centers":[0,1,2,3,4,5],"edges":{"orient":[0,0,0,0,0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7,8,9,10,11]},"corners":{"orient":[0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7]}}},{"name":"Na","algs":[],"cube":{"centers":[0,1,2,3,4,5],"edges":{"orient":[0,0,0,0,0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7,8,9,10,11]},"corners":{"orient":[0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7]}}},{"name":"Nb","algs":[],"cube":{"centers":[0,1,2,3,4,5],"edges":{"orient":[0,0,0,0,0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7,8,9,10,11]},"corners":{"orient":[0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7]}}},{"name":"Ra","algs":[],"cube":{"centers":[0,1,2,3,4,5],"edges":{"orient":[0,0,0,0,0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7,8,9,10,11]},"corners":{"orient":[0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7]}}},{"name":"Rb","algs":[],"cube":{"centers":[0,1,2,3,4,5],"edges":{"orient":[0,0,0,0,0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7,8,9,10,11]},"corners":{"orient":[0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7]}}},{"name":"T","algs":[],"cube":{"centers":[0,1,2,3,4,5],"edges":{"orient":[0,0,0,0,0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7,8,9,10,11]},"corners":{"orient":[0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7]}}},{"name":"Ua","algs":[],"cube":{"centers":[0,1,2,3,4,5],"edges":{"orient":[0,0,0,0,0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7,8,9,10,11]},"corners":{"orient":[0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7]}}},{"name":"Ub","algs":[],"cube":{"centers":[0,1,2,3,4,5],"edges":{"orient":[0,0,0,0,0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7,8,9,10,11]},"corners":{"orient":[0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7]}}},{"name":"V","algs":[],"cube":{"centers":[0,1,2,3,4,5],"edges":{"orient":[0,0,0,0,0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7,8,9,10,11]},"corners":{"orient":[0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7]}}},{"name":"Y","algs":[],"cube":{"centers":[0,1,2,3,4,5],"edges":{"orient":[0,0,0,0,0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7,8,9,10,11]},"corners":{"orient":[0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7]}}},{"name":"Z","algs":[],"cube":{"centers":[0,1,2,3,4,5],"edges":{"orient":[0,0,0,0,0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7,8,9,10,11]},"corners":{"orient":[0,0,0,0,0,0,0,0],"perm":[0,1,2,3,4,5,6,7]}}}]}*/