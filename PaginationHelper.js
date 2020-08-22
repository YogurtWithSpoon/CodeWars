class PaginationHelper{
    constructor(collection,itemsPerPage){
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }
    itemCount(){
        return this.collection.length
    }
    pageCount(){
        return Math.ceil(this.collection.length/this.itemsPerPage)
    }
    pageItemCount(page){
        if(page < 0){
            return -1;
        }
        let powPage = page + 1;
        if(this.itemsPerPage*powPage - this.collection.length > 0){
            if(this.itemsPerPage * powPage - this.collection.length >=6){
                return -1
            } else {
                return this.itemsPerPage * powPage - this.collection.length
            }
        } else {
            return this.itemsPerPage
        }
    }
    pageIndex(index){
        if((this.pageCount()*this.itemsPerPage) - index < 0 || index < 0 || this.collection.length == 0){
            return -1
        }
        if(index == 0){
            return 0
        }
        let page = 0;
        while(index > page * this.itemsPerPage){
            page++
        }
        return page-1
    }
}

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
console.log(helper.itemCount())
console.log(helper.pageCount())
console.log(helper.pageItemCount(-1))
console.log(helper.pageIndex(1))