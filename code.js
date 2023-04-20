const hasCycle = (head) => {
    let fast = head;
    while (fast && fast.next) {
        // Two pointers "head" and "fast" to traverse the list
      head = head.next; 
    //    Head pointer moves one step at a time.
      fast = fast.next.next;  
    //   Fast moves two steps at a time.
      if (head === fast) return true; 
    //    If they are pointing at the same node at any time
    }
    return false;
  };
