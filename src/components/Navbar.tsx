/* eslint-disable react/jsx-indent, @typescript-eslint/indent */
/* Josh : View Edit Profile has no link, will link to the User Profile Page (to be implemented later?) */

'use client';

import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { Container, Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import {
  BoxArrowRight,
  Lock,
  Person,
  PersonFill,
  PersonPlusFill,
  Search,
  MusicNoteBeamed,
  CardList,
  Collection,
} from 'react-bootstrap-icons';

const NavBar: React.FC = () => {
  const { data: session } = useSession();
  const currentUser = session?.user?.email;
  const userWithRole = session?.user as { email: string; randomKey: string };
  const role = userWithRole?.randomKey;
  const pathName = usePathname();
  return (
    <Navbar bg="black" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Image
            src="/images/musicians-of-manoa-logo.png"
            alt="Musicians of Manoa Logo"
            height={80}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggler"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-start">
            {currentUser
              ? [
                  <Nav.Link
                    id="feed-nav"
                    href="/feed"
                    key="feed"
                    active={pathName === '/feed'}
                  >
                    Feed
                    <CardList className="ms-2" />
                  </Nav.Link>,
                  <Nav.Link
                    id="create-jam-nav"
                    href="/jam-information"
                    key="create-jam"
                    active={pathName === '/jam-information'}
                  >
                    Create a Jam
                    <MusicNoteBeamed className="ms-2" />
                  </Nav.Link>,
                  <Nav.Link
                    id="jam-list-nav"
                    href="/jam-list"
                    key="jam-list"
                    active={pathName === '/jam-list'}
                  >
                    Jam List
                    <Collection className="ms-2" />
                  </Nav.Link>,
                  <Nav.Link
                    id="search-nav"
                    href="/search"
                    key="search"
                    active={pathName === '/search'}
                  >
                    Search
                    <Search className="ms-2" />
                  </Nav.Link>,
                ]
              : ''}
            {currentUser && role === 'ADMIN' ? (
              <Nav.Link
                id="admin-stuff-nav"
                href="/admin"
                key="admin"
                active={pathName === '/admin'}
              >
                Admin
              </Nav.Link>
            ) : (
              ''
            )}
          </Nav>
          <Nav>
            {session ? (
              <NavDropdown id="login-dropdown" title={currentUser}>
                <NavDropdown.Item
                  id="login-dropdown-view-profile"
                  href="/profile"
                >
                  <Person />
                  View/Edit Profile
                </NavDropdown.Item>
                <NavDropdown.Item
                  id="login-dropdown-sign-out"
                  href="/api/auth/signout"
                >
                  <BoxArrowRight />
                  Sign Out
                </NavDropdown.Item>
                <NavDropdown.Item
                  id="login-dropdown-change-password"
                  href="/auth/change-password"
                >
                  <Lock />
                  Change Password
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown id="login-dropdown" title="Login">
                <NavDropdown.Item
                  id="login-dropdown-sign-in"
                  href="/auth/signin"
                >
                  <PersonFill />
                  Sign in
                </NavDropdown.Item>
                <NavDropdown.Item
                  id="login-dropdown-sign-up"
                  href="/auth/signup"
                >
                  <PersonPlusFill />
                  Sign up
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
