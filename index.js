var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function UserIds() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = yield response.json();
        const userIds = [];
        for (let i = 0; i < posts.length; i++) {
            const userId = posts[i].userId;
            let found = false;
            // for (let j = 0; j < userIds.length; j++) {
            //     if (userIds[j] === userId) {
            //         found = true;
            //         break;
            //     }
            // }
        }
        console.log("Список всех userId:", userIds);
    });
}
UserIds();
