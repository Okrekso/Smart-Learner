package localdevs.smartlearner;

import android.os.Bundle;
import android.support.v4.app.FragmentTransaction;
import android.support.design.widget.NavigationView;
import android.support.v4.view.GravityCompat;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.Toast;

import localdevs.smartlearner.Page_Fragments.LogIn;
import localdevs.smartlearner.Page_Fragments.The_Main;
import localdevs.smartlearner.Page_Fragments.UserPage;

public class MainPage extends AppCompatActivity
        implements NavigationView.OnNavigationItemSelectedListener {

    LogIn logIn;
    The_Main the_main;
    UserPage user_page;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main_page);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(
                this, drawer, toolbar, R.string.navigation_drawer_open, R.string.navigation_drawer_close);
        drawer.addDrawerListener(toggle);
        toggle.syncState();

        NavigationView navigationView = (NavigationView) findViewById(R.id.nav_view);
        navigationView.setNavigationItemSelectedListener(this);
        logIn = new LogIn();
        the_main = new The_Main();
        user_page = new UserPage();
    }


    @SuppressWarnings("StatementWithEmptyBody")
    @Override
    public boolean onNavigationItemSelected(MenuItem item) {
        // Handle navigation view item clicks here.
        int id = item.getItemId();

        FragmentTransaction ftrans = getSupportFragmentManager().beginTransaction();
        if (id == R.id.nav_login) {
            Toast.makeText(
                    MainPage.this, "Login Page.",Toast.LENGTH_SHORT
            ).show();
            ftrans.replace(R.id.container,logIn);
        } else if (id == R.id.nav_the_main) {
            Toast.makeText(
                    MainPage.this, "The Main Page.",Toast.LENGTH_SHORT
            ).show();
            ftrans.replace(R.id.container, the_main);
        } else if (id == R.id.nav_user) {
            Toast.makeText(
                    MainPage.this, "User Page.",Toast.LENGTH_SHORT
            ).show();
            ftrans.replace(R.id.container, user_page);
        }

        ftrans.commit();
        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        drawer.closeDrawer(GravityCompat.START);
        return true;
    }
}
