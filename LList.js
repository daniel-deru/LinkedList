
class Node {
    constructor(element){
        this.element = element
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = new Node("head")
    }

    findPrevious(element){
        let currentNode = this.head
        while(!(currentNode.next == null) && (currentNode.next != element)){
            currentNode = currentNode.next
        }
        return currentNode
    }

    remove(element){
        let previousNode = this.findPrevious(element)
        if(previousNode != null){
            previousNode.next = previousNode.next.next
        }
    }

    display(){
        let currentNode = this.head
        while(currentNode.next != null){
            console.log(currentNode.next.element)
            currentNode = currentNode.next
        }
    }
    find(element){
        let currentNode = this.head
        while(currentNode.element != element){
            currentNode = currentNode.next
        }
        return currentNode
    }

    insert(newElement, item){
        let newNode = new Node(newElement)
        let currentNode = this.find(item)
        newNode.next = currentNode.next
        currentNode.next = newNode
    }
}