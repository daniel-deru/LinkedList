

class Node {
    constructor(element){
        this.element = element
        this.next = null
        this.previous = null
    }
}

class DLList {
    constructor(){
        this.head = new Node("head")

    }

    findLast(){
        let currentNode = this.head
        while(currentNode.next != null){
            currentNode = currentNode.next
        }
        return currentNode
    }

    dispReverse(){
        let currentNode = this.head
        currentNode = this.findLast()

        while(currentNode != null){
            console.log(currentNode.element)
            currentNode = currentNode.previous
        }
    }

    find(element){
        let currentNode = this.head
        while(currentNode.element != element){
            currentNode = currentNode.next
        }
        return currentNode
    }

    remove(element){
        let currentNode = this.find(element)
        if(currentNode.next != null){
            currentNode.previous.next = currentNode.next
            currentNode.next.previous = currentNode.previous

            currentNode.next = null
            currentNode.previous = null
        }
    }

    display(){
        let currentNode = this.head
        while(currentNode.next != null){
            console.log(currentNode)
            currentNode = currentNode.next
        }
    }

    insert(newElement, oldElement){
        let newNode = new Node(newElement)
        let currentNode = this.find(oldElement)
        newNode.next = currentNode.next
        newNode.previous = currentNode
        currentNode.next = newNode
    }
}