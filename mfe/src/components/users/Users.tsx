import React from 'react';
import './Users.css';

export const Users = () => {
  return (
    <div className="container-users">
      <h2>Usuarios (remote) - React18</h2>

      <div className="users-table">
        <div className="table-header">
          <div className="header-cell">ID</div>
          <div className="header-cell">Name</div>
          <div className="header-cell">Email</div>
          <div className="header-cell">Actions</div>
        </div>
        <div className="table-body">
          <div className="table-row">
            <div className="cell">1</div>
            <div className="cell">John Smith</div>
            <div className="cell">john.smith&#64;example.com</div>
            <div className="cell">
              <button type="button" className="btn-edit">
                Edit
              </button>
              <button type="button" className="btn-delete">
                Delete
              </button>
            </div>
          </div>
          <div className="table-row">
            <div className="cell">2</div>
            <div className="cell">Emma Johnson</div>
            <div className="cell">emma.johnson&#64;example.com</div>
            <div className="cell">
              <button type="button" className="btn-edit">
                Edit
              </button>
              <button type="button" className="btn-delete">
                Delete
              </button>
            </div>
          </div>
          <div className="table-row">
            <div className="cell">3</div>
            <div className="cell">Michael Williams</div>
            <div className="cell">michael.williams&#64;example.com</div>
            <div className="cell">
              <button type="button" className="btn-edit">
                Edit
              </button>
              <button type="button" className="btn-delete">
                Delete
              </button>
            </div>
          </div>
          <div className="table-row">
            <div className="cell">4</div>
            <div className="cell">Sophia Brown</div>
            <div className="cell">sophia.brown&#64;example.com</div>
            <div className="cell">
              <button type="button" className="btn-edit">
                Edit
              </button>
              <button type="button" className="btn-delete">
                Delete
              </button>
            </div>
          </div>
          <div className="table-row">
            <div className="cell">5</div>
            <div className="cell">Daniel Jones</div>
            <div className="cell">daniel.jones&#64;example.com</div>
            <div className="cell">
              <button type="button" className="btn-edit">
                Edit
              </button>
              <button type="button" className="btn-delete">
                Delete
              </button>
            </div>
          </div>
          <div className="table-row">
            <div className="cell">6</div>
            <div className="cell">Olivia Garcia</div>
            <div className="cell">olivia.garcia&#64;example.com</div>
            <div className="cell">
              <button type="button" className="btn-edit">
                Edit
              </button>
              <button type="button" className="btn-delete">
                Delete
              </button>
            </div>
          </div>
          <div className="table-row">
            <div className="cell">7</div>
            <div className="cell">James Miller</div>
            <div className="cell">james.miller&#64;example.com</div>
            <div className="cell">
              <button type="button" className="btn-edit">
                Edit
              </button>
              <button type="button" className="btn-delete">
                Delete
              </button>
            </div>
          </div>
          <div className="table-row">
            <div className="cell">8</div>
            <div className="cell">Ava Martinez</div>
            <div className="cell">ava.martinez&#64;example.com</div>
            <div className="cell">
              <button type="button" className="btn-edit">
                Edit
              </button>
              <button type="button" className="btn-delete">
                Delete
              </button>
            </div>
          </div>
          <div className="table-row">
            <div className="cell">9</div>
            <div className="cell">Alexander Davis</div>
            <div className="cell">alexander.davis&#64;example.com</div>
            <div className="cell">
              <button type="button" className="btn-edit">
                Edit
              </button>
              <button type="button" className="btn-delete">
                Delete
              </button>
            </div>
          </div>
          <div className="table-row">
            <div className="cell">10</div>
            <div className="cell">Isabella Rodriguez</div>
            <div className="cell">isabella.rodriguez&#64;example.com</div>
            <div className="cell">
              <button type="button" className="btn-edit">
                Edit
              </button>
              <button type="button" className="btn-delete">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
