async function UserIds(): Promise<void> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    
    const userIds: number[] = [];
    
    for (let i = 0; i < posts.length; i++) {
        const userId = posts[i].userId;
        let found = false;
        
        for (let j = 0; j < userIds.length; j++) {
            if (userIds[j] === userId) {
                found = true;
                break;
            }
        }
    }
    
    console.log("Список всех userId:", userIds);
}
UserIds();