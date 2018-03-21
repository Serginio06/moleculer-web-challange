<h1> Simple calculator App based on microservices architecture using Moleculer</h1> 

## Minimum Requirements
### <a href='https://nodejs.org/en/'>[Node 8](https://nodejs.org/en/)</a>
    We use Node 8.9.4 to power the API server in development and production.
    Use `nvm` if you require multiple versions of node installed on your local machine.
### <a href='https://moleculer.services/0.12/docs/'>[Moleculer](https://moleculer.services/0.12/docs/)</a>
    Moleculer is a fast, modern and powerful microservices framework for Node.js. It helps you to build efficient, reliable & scalable services. 
    Moleculer provides many features for building and managing your microservices.


## Installation

1. Clone the repository: `git clone https://github.com/Serginio06/moleculer-web-challange.git`
2. Install the application: `npm install`
3. Start single instance of the server: `npm start start-services` - it runs single instance NodeJs services 
4. Start multi instances of the server: `npm start start-multiservices` - it runs multi instance NodeJs services using [node cluster] (https://nodejs.org/api/cluster.html)
5. View in browser at `http://localhost:3001`

---
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.